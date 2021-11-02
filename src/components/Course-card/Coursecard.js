import React from 'react'
import './Coursecard.css'
import { Link } from 'react-router-dom'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import basic from '../../api/basic'

const Coursecard = (props) => {
    // console.log(props)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const rzpCall = (e) => {
        e.preventDefault();
        let options = {
            "key": "rzp_test_Zy0gDljx5YJ9JE",
            "amount": props.courseFeesInr * 100, // 2000 paise = INR 20, amount in paisa
            "name": "Athena Learning",
            "description": `${props.courseName} - ${props.teacherName}`,
            "image": "https://www.northwesteyesurgeons.com/wp-content/uploads/2017/10/NWES-Favicon.png",
            "handler": function (response) {
                // alert(response.razorpay_payment_id);
                // post payment id to server
                var pgPaymentStatus;
                if (response.razorpay_payment_id) {
                    pgPaymentStatus = 'success'
                } else {
                    pgPaymentStatus = 'failure'
                }
                var date = new Date();
                var dateStr =
                    date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
                    ("00" + date.getDate()).slice(-2) +
                    " " +
                    ("00" + date.getHours()).slice(-2) + ":" +
                    ("00" + date.getMinutes()).slice(-2) + ":" +
                    ("00" + date.getSeconds()).slice(-2);
                const sendPaymentId = async () => {
                    await basic.post('/courseEnroll', {
                        courseId: props.courseId,
                        studentId: 1,
                        courseEnrollDatetime: dateStr,
                        studentStatus: 1,
                        pgPaymentId: response.razorpay_payment_id,
                        pgPaymentDateTime: dateStr,
                        pgPaymentStatus: pgPaymentStatus,
                        pgPaymentAmount: props.courseFeesInr
                    }).then(res => {
                        console.log(res)
                    }
                    ).catch(err => {
                        console.log(err)
                    })

                }
                sendPaymentId()

            },
            "prefill": {
                "name": "",
                "email": ""
            },
            "theme": {
                "color": "#170055"
            }
        };

        let rzp = new window.Razorpay(options);
        rzp.open();
    }
    return (
        <React.Fragment>
            <Popover

                isOpen={isPopoverOpen}
                positions={['right', 'left', 'top', 'bottom']}
                padding={10}
                align="center"
                width={200}
                onMouseOut={() => setIsPopoverOpen(!isPopoverOpen)}
                reposition="true"
                content={({ position, childRect, popoverRect }) => (
                    <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        childRect={childRect}
                        popoverRect={popoverRect}
                        arrowColor={'white'}
                        arrowSize={10}
                        // arrowStyle={{ opacity: 0.7 }}
                        className='popover-arrow-container'
                        arrowClassName='popover-arrow'

                    >
                        <div
                            style={{ backgroundColor: 'white', color: '#170055', padding: '10px', borderRadius: '5px', width: '300px', height: 'fit-content', lineHeight: '2' }}
                            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                            <div className="popover-text">
                                <h1>{props.courseName}</h1>
                                <h2 className="course-instructor">{props.teacherName}</h2>
                                <p>{props.courseDescription.substring(0, 150)}...</p>
                                <ol>
                                    <li>{props.courseShortnote1}</li>
                                    <li>{props.courseShortnote2}</li>
                                    <li>{props.courseShortnote3}</li>

                                </ol>

                            </div>
                        </div>
                    </ArrowContainer>
                )}
            >
                <div className="tile" onMouseOver={() => setIsPopoverOpen(!isPopoverOpen)} onMouseOut={() => setIsPopoverOpen(!isPopoverOpen)} >
                    <Link to={{
                        pathname: props.page, state:
                        {
                            courseName: props.courseName,
                            courseImg: props.courseDpimage,
                            coursePriceINR: props.coursePriceINR,
                            courseImage: props.courseDpimage,
                            courseTeacher: props.teacherName,
                            courseDescription: props.courseDescription,
                            imageSrc: props.courseDpimage,
                            courseFeesInr: props.courseFeesInr,
                        }
                    }}  >
                        <img src={props.courseDpimage} alt="ssd" />
                        <div className="text">
                            <h1>{props.courseName.substring(0, 20)}...</h1>
                            <h2 className="course-instructor">{props.teacherName.substring(0, 20)}</h2>
                            <p className="course-date">Created at: {props.coursePublishedDate}</p>
                            <p className="course-price">Rs. {props.courseFeesInr}</p>
                        </div>
                    </Link>
                    <>
                        <button className="course-button" onClick={(e) => rzpCall(e)}>enroll Now</button>
                    </>


                </div>
            </Popover>

        </React.Fragment >
    )
}

export default Coursecard
