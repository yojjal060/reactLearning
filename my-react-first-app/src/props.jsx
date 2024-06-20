function Cars(props){
    return(
        <h2>I love {props.brand} car</h2>
    )
}


export default function Props(){
    return(
        <>
            Hello,
            <Cars brand="ford" />

        </>
        
    )
}