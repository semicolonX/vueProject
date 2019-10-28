import '../asset/styles/footer.styl'


export default {
    data(){
        return{
            author:'xht'
        }
    },
    render(){
        return(
            <div id='footer'>
                <span>{this.author} Welcome to use</span>
            </div>
        )
    }
}