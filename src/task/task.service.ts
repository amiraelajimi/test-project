import { Model, FilterQuery, CreateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from './task.schema';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_MODEL')
    private taskModel: Model<Task>,
  ) {}

  //ajouter tache
  async create(input: CreateQuery<Task>): Promise<Task> {
    return this.taskModel.create(input);
  }

  //retourner tache   
  async findOne(query: FilterQuery<Task>): Promise<Task> {
    return this.taskModel.findOne(query).lean();
  }

  async find(): Promise<Task[]> {
    return this.taskModel.find().lean();
  }
//Modifier tache
  async update(id): Promise<any> {
    return await this.taskModel.findByIdAndUpdate(id);
    }

  //supprimer tache  
  async delete(id): Promise<any> {
    return await this.taskModel.findByIdAndRemove(id);
    }

// Pour répondre à la condition qu'un utilisateur ne peut pas supprimer la tache d'un autre

    async deleteByUser(id, user_id): Promise<any> {
    var returned_task = await this.taskModel.findById(id);
   
    if(returned_task.user_id == user_id){
        return await this.taskModel.findByIdAndRemove(id);
    }
    }
 
 //changer le status de la tache exp complétée/non complélée dont l'utilisateur existe déjà
  async changeStatus(id,status, user_id): Promise<any> {
    var returned_task = await this.taskModel.findById(id);
    if(returned_task.user_id == user_id){
        returned_task.status = status;
    }
    

    }

    //initialiser le status de la tache exp complétée/non complélée dont l'utilisateur existe déjà
  async initializeStatus(id,status, user_id): Promise<any> {
    var returned_task = await this.taskModel.findById(id);
    if(returned_task.user_id == user_id){
        returned_task.status = '';
    }
    

    }
    
//ajouter un commentaire à une tache
  async addComment(id,comment): Promise<any> {
    var returned_task = await this.taskModel.findById(id);
    returned_task.commentaire = comment;
    
  }
    
}
