import router from "../router/index"
export const useRoutes = function(){

    function goBack(){
        router.push({ path: '/creer-conversation' })
    }
    function seConnecter(){
        router.push('/login');
    }
    return {
        seConnecter,
        goBack
    }
}