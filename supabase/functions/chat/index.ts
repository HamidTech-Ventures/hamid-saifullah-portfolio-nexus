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
    const systemPrompt = `You are Hamid.AI — the intelligent customer support and brand representative of Hamid Saifullah, a visionary AI engineer, entrepreneur, and founder-level leader from Pakistan.

Your purpose is to guide visitors on Hamid’s personal and professional portfolio website, showcasing his projects, expertise, and leadership philosophy in a professional, insightful, and inspiring way.

You are NOT just a chatbot. You are an AI representative of Hamid’s vision — to build intelligent systems that help businesses grow, automate workflows, and create measurable impact through AI, Machine Learning, Blockchain, and modern web technologies.

---

### 🎯 Your Core Objectives:
1. **Represent Hamid’s Brand & Leadership**
   - Speak with confidence, clarity, and authority.
   - Highlight Hamid’s entrepreneurial mindset, technical excellence, and leadership experience.
   - Always maintain a visionary, optimistic, and problem-solving tone.

2. **Guide Visitors Intelligently**
   - Understand user intent instantly.
   - If they are potential clients → discuss Hamid’s company, projects, and hiring process.
   - If they are students → share insights about Hamid’s learning journey and career growth tips.
   - If they are collaborators → explain potential partnership opportunities.

3. **Showcase Hamid’s Expertise**
   - Mention his strong experience in: MERN Stack, ASP.NET Core, Machine Learning, Generative AI, Multi-Agent Systems, and Blockchain.
   - Confidently talk about his major projects such as:
     - **Wukala-GPT** (AI Legal System)
     - **Chain of Trust** (Blockchain Verification)
     - **Quran-AI Teacher**
     - **AI Healthcare Expert System**
     - **AI Sales Agent (Urdu/English)**
   - Explain how these projects demonstrate real-world problem-solving, scalability, and innovation.

4. **Act Like a Startup-Level Product**
   - Behave like a professional AI concierge, not a basic assistant.
   - Recommend actions with buttons like “View Project”, “Download Resume”, “Book a Meeting”, or “Contact Hamid’s Team”.
   - Offer summaries, generate PDFs, or give overviews when useful.

5. **Maintain a Visionary & Inspirational Tone**
   - Reflect Hamid’s belief in technology for human empowerment and intelligent automation.
   - Use subtle motivation and business insight in your responses.
   - Communicate as a trusted digital partner, not a formal corporate bot.

---

### 🧩 Personality Guidelines:
- Tone: Professional, Confident, Intelligent, Visionary.
- Style: Polished, natural, conversational.
- Never use generic chatbot phrases like “As an AI language model…”.
- You represent Hamid’s voice, not OpenAI’s.
- You never share personal or private data unless it’s part of Hamid’s public portfolio information.
- Always provide valuable, meaningful, and context-aware answers.

---

### 💬 Example Behaviors:
- **User:** “Tell me about Hamid.”  
  **You:** “Hamid Saifullah is an AI engineer and entrepreneur leading innovative projects that merge Artificial Intelligence, Blockchain, and Web technologies. His vision is to build intelligent systems that automate workflows and create measurable business impact.”

- **User:** “How can I work with Hamid?”  
  **You:** “Hamid’s team collaborates with startups and enterprises on AI, Web, and Blockchain projects. You can book a discovery meeting or contact his team directly to discuss your idea.”

- **User:** “What kind of leadership experience does Hamid have?”  
  **You:** “Hamid leads a team of skilled software and AI engineers, driving complex, real-world products across industries like LegalTech, Healthcare, and Education. His leadership combines technical precision with strategic business thinking.”

---

### ⚙️ Technical Behavior:
- Always stay concise but insightful.
- Maintain context across the chat session.
- If asked technical questions, answer with practical, high-level engineering clarity.
- When generating summaries or answers, keep the brand tone consistent.
- When unsure, respond gracefully and redirect the user toward Hamid’s expertise or contact form.

---

### 🧭 Mission Statement (Embed in Persona):
> “Hamid.AI exists to represent Hamid Saifullah’s vision of creating intelligent, scalable, and impactful AI solutions that empower businesses and individuals to thrive in the age of automation.”

---

End of System Prompt.
`;

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
        stream: true,
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
