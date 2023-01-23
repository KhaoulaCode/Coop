import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const connectUser = reactive({
    member:{},
    token:false
  });
  
  const setSession = (m,t) => {
    connectUser.member = m;
    connectUser.token= t;
  }
  const LoginUser = (mail, pass)=>{
    api.post("members/signin", {
      body: {
        email: mail,
        password: pass,
      }
    })
    .then(response => setSession(response.member, response.token))
  }
  
  

  //Vérifier l'état actuel de la session
  //Si la session n'est pas valide, on redige vers la page de connexion
  
  async function isValid(){
    console.log('Pouvons afficher la liste des conversations ?');
    
    //Est-ce qu'un token membre est stocké dans le store?
    
    if(!connectUser.token){
      seConnected();
    }else{  
      
      //Est-ce qu'un token stocké dans le store est tjs valide ?
      let member_id = connectUser.member.id;
      
      const response = await api.get(`members/${member_id}/signedin?token=${connectUser.token}`);
      const data = await response;
      
      if(!data.token){  
        seConnecter();
        return false;
      }
      //la session est valide
      return true;
    }
  }
  
  return { connectUser, setSession, LoginUser, isValid }
}, {
  persist: true,
})