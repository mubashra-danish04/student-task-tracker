from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.db import Base,engine
from database.models import Task 
from routes import task
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(task.router)
origins = [
    # "http://127.0.0.1:5173",  # Vite dev server URL
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return "hellooo"

