import router from "../router/index"
export const useGlobal = function(){
    console.log(router)

    //redirection vers page de cnx
    function seConnecter(){
        router.push('/login');
    }
    return {
        seConnecter
    }
}