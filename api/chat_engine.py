# chat_engine.py
from langchain_groq import ChatGroq
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferWindowMemory
from langchain_core.prompts import (
    ChatPromptTemplate, MessagesPlaceholder,
    SystemMessage, HumanMessagePromptTemplate,
)

SYSTEM_PROMPT = (
    """"""
)

def build_chain(memory_k: int = 12) -> LLMChain:
    llm = ChatGroq(
        model="llama-3.3-70b-versatile",
        temperature=0.2,       # a touch of creativity
        max_tokens=None,
        max_retries=2,
        reasoning_format="parsed",
    )

    prompt = ChatPromptTemplate(
        messages=[
            SystemMessage(content=SYSTEM_PROMPT),
            MessagesPlaceholder(variable_name="chat_history"),
            HumanMessagePromptTemplate.from_template("{user_input}"),
        ]
    )

    memory = ConversationBufferWindowMemory(
        k=memory_k,                 # keep last 12 exchanges
        memory_key="chat_history",
        return_messages=True,
    )

    return LLMChain(llm=llm, prompt=prompt, memory=memory)
