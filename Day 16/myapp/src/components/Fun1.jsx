function Fun1(props){

    // let x = 10;
    console.log(props.data)

    return(
        <div>
            <h1>This is Header Box</h1>

            {/* <p>{x}</p> */}

            <p>{props.data}</p>

            { console.log('hii')}

            <p>{props.data2}</p>



        </div>
    )
}

export default Fun1