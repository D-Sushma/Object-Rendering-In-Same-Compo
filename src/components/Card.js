// 1. making Card compo and go nd import in app.js
import './Card.css'

// 3. import object.js--------------------
// import Object from '../components/Object'
import Object from './Object'


//============================ OBJECT RENDERING======================
// 4.  checking that object comes or not (in form of array)-------------------------
console.log(Object);

// 4. use map() fun to receive whole element of object.js--------------------
// map()--> have a callback fun & this fun have "ele" parameter inside (), than use arrow=> fun and curly braces{}
// map(ele) --> this ele traverse all the obj frm object.js and receive that object (in ele parameter)
// FatchCardArr called --> CUSTOM COMPONENT--> yha FatchCardArr varible bnane ki need nhi hai object mapping ko store krne k liye
// ex. -->let FatchCardArr = Object.map((ele) => {}   & 
//  <Card Fatchdata={ele} /> --> no need to make var to receive ele..... directly hm use krenge ex.-->{ele.image}


export default function Card() {
    return (
        <>
            <div className="parent">
        
                {/* 7. this {} braces not to forget to put bcz we write js otherwise show the error */}

                {

                    // 4.--------------------------
                    Object.map((ele) => {
                        //5.  checking that object comes or not (in form of direct show obj)-------------------------
                        console.log(ele);
                        return (

                            //6. from here we use ele------------------------------------------
                            <div className="MobileCintainer">
                                <div className="Mobile-img">
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className="MobileInfo">
                                    <div className="Mobile-name">{ele.name}</div>
                                    <div className="Mobile-rating">{ele.rating}</div>
                                    <div className="Mobile-deal">{ele.deal}</div>
                                    <div className="Mobile-price">{ele.price}</div>
                                    <div style={{ display: "flex", }}>
                                        <div className="Mobile-saving"><span style={{ backgroundColor: "yellow" }}>{ele.save}</span>with coupon</div>
                                        <button className='addcart'>Add to Cart</button>
                                    </div>
                                    <div className="Mobile-prime">{ele.deliver}</div>
                                </div>
                            </div>

                        )
                    })

                }
            </div>


        </>
    )
}
