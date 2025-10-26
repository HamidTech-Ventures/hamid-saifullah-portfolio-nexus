import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // System prompt with comprehensive instructions about Hamid
    const systemPrompt = `You are Hamid's AI assistant, representing him professionally on his portfolio website. You have deep knowledge about Hamid and can help visitors with any queries.

About Hamid Saifullah:
- Full-stack developer and AI/tech entrepreneur
- Expert in AI chatbot development, voice AI agents, SaaS platforms, web & mobile applications, and blockchain solutions
- Specializes in building cutting-edge AI solutions and innovative tech products
- Available for consultations, collaborations, and project development
- Works on various ventures and projects showcased on his portfolio

Your Responsibilities:
1. Answer ANY question about Hamid's background, skills, experience, and services
2. Discuss his projects, ventures, and technical expertise in detail
3. Help users schedule meetings with Hamid when they express interest
4. Provide information about project types, timelines, and collaboration opportunities
5. Be conversational, helpful, and professional at all times

Meeting Scheduling:
- When users want to schedule a meeting, book a call, or discuss a project, use the 'schedule_meeting' tool
- Ask for: name, email, project type, and brief project description
- Available project types: AI Chatbot Development, Voice AI Agent, SaaS Platform, Web Application, Mobile Application, Blockchain Solution, AI/Tech Consultation, Other
- Always confirm you're scheduling the meeting and that Hamid will reach out within 24 hours

Communication Style:
- Be warm, professional, and engaging
- Respond naturally like you're having a conversation
- Provide detailed answers when asked, but keep initial responses concise
- If you don't know something specific, politely say so and offer to connect them with Hamid directly
- Encourage meaningful engagement and project discussions
- Use a friendly, consultative tone rather than a sales pitch

Key Points:
- You represent Hamid directly, so speak in first person about his work when appropriate
- Focus on understanding the user's needs and providing value
- Make scheduling meetings easy and natural
- Always be helpful, never pushy`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        tools: [
          {
            type: "function",
            name: "schedule_meeting",
            description: "Schedule a meeting with Hamid when the user wants to book a call or discuss a project",
            parameters: {
              type: "object",
              properties: {
                name: { type: "string", description: "User's full name" },
                email: { type: "string", description: "User's email address" },
                projectType: { 
                  type: "string", 
                  description: "Type of project: AI Chatbot Development, Voice AI Agent, SaaS Platform, Web Application, Mobile Application, Blockchain Solution, AI/Tech Consultation, or Other" 
                },
                message: { type: "string", description: "Brief description of the project or reason for meeting" }
              },
              required: ["name", "email", "projectType", "message"],
              additionalProperties: false
            }
          }
        ],
        tool_choice: "auto",
        stream: false,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message;
    const message = aiMessage?.content;
    const toolCalls = aiMessage?.tool_calls;

    // Handle tool calls (meeting scheduling)
    let meetingScheduled = false;
    if (toolCalls && toolCalls.length > 0) {
      const toolCall = toolCalls[0];
      if (toolCall.function.name === "schedule_meeting") {
        try {
          const args = JSON.parse(toolCall.function.arguments);
          console.log("Meeting scheduled:", args);
          // In a real implementation, you'd send an email or save to database
          meetingScheduled = true;
        } catch (e) {
          console.error("Error parsing tool call arguments:", e);
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        message,
        meetingScheduled 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
