from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database.db import Base

class Task(Base):
    __tablename__ = "task"

    id = Column(Integer, primary_key=True)
    title = Column(String(50), nullable=False)
    description = Column(Text)
    status = Column(String(20), default="pending") 
    due_date = Column(DateTime)  
    created_time = Column(DateTime, default=datetime.utcnow)  
    updated_time = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


