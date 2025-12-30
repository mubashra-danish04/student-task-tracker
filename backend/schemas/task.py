from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TaskBase(BaseModel):
    # title: str
    # description: Optional[str] = None
    # status: str = "pending"
    # due_date: Optional[datetime] = None
    title:str
    description:str
    status:str
    due_date:datetime
    created_time: Optional[datetime]=None
    updated_time:Optional[datetime]=None

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id:int 
    
    model_config = {
        "from_attributes":True
    }