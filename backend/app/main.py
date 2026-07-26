from fastapi import FastAPI

app = FastAPI(
    title="AI Productivity Hub API",
    description="MCP powered productivity platform",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "AI Productivity Hub Backend Running 🚀"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }