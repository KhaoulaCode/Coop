import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import {useGlobal}  from "./global.js"
const g = useGlobal();
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
  
  const logout = ()=>{
    connectUser.member={}
    connectUser.token=false
  }
  
  async function isValid(){
      
      let member_id = connectUser.member.id;
      
      const response = await api.get(`members/${member_id}/signedin?token=${connectUser.token}`);
      const data = await response;
      
      if(!data.token){  
        g.seConnecter();
        return false;
      }

      return true;
  }
  
  return { connectUser, setSession, LoginUser, isValid, logout }
}, {
  persist: true,
})