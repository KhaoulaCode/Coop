export const useGlobal = function(){
    const router = inject('router');
    //redirection vers page de cnx
    function seConnecter(){
        router.push('/login');
    }
    return {
        seConnecter
    }
}