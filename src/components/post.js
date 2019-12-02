import React from 'react';

export default class Post extends React.Component  {

    constructor(props) {
        super(props);
        this.state={};
    }

    render(){

        var color = "red";

        switch(this.props.type){
            case "about":
                color = "#F6F740";
                break;
            case "projects":
                color = "#2176FF";
                break;
            case "videos":
                color = "#FF5E5B";
                break;
            default :
                color = "#FFFFEA";
                break;
        }
        
        return(
            <div>
                <div className='postdate'>
                    {this.props.date}
                </div>  
                <div className="post" >
                    <div className='posttitle' style={{backgroundColor : color}}>
                        {this.props.title}
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}} />
                </div>
         </div>
        )
    }

}
