from pydantic import BaseModel
from datetime import datetime

class TaskBase(BaseModel):
  
    title:str
    description:str
    status:str
    due_date:datetime
    created_time:datetime
    updated_time:datetime

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id:int 
    
    model_config = {
        "from_attributes":True
    }