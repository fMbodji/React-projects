import React from "react";
import Event from './Event'

const Calendar = () => {

    return (

        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">11 am </td>
                        <Event event="Work" color="green" />
                        <Event event="Breakfast" />
                        <Event event="Class" color="yellow" />
                        <Event event="Work" color="green" />
                        <Event event="Class" color="yellow" />
                        <Event event="Work" color="green" />
                        <Event event="Work" color="green" />
                    </tr>
                    <tr>
                        <td className="time">12 pm </td>
                        <Event event="Work" color="green" />
                        <Event event="Accounting" color="pink" />
                        <Event event="Class" color="yellow" />
                        <Event event="Work" color="green" />
                        <Event event="Class" color="yellow" />
                        <Event event="Work" color="green" />
                        <Event event="Work" color="green" />
                    </tr>
                    <tr>
                        <td className="time">01 pm </td>
                        <Event event="Work" color="green" />
                        <Event event="Accounting" color="pink" />
                        <Event event="Class" color="yellow" />
                         <Event event="Work" color="green" />
                        <Event event="Class" color="yellow" />
                         <Event event="Work" color="green" />
                         <Event event="Work" color="green" />
                    </tr>
                    <tr>
                        <td className="time">02 pm </td>
                        <Event event="Lunch Break"/>
                        <Event event="Lunch Break"/>
                        <Event event="Lunch Break"/>
                        <Event event="Lunch Break"/>
                        <Event event="Lunch Break"/>
                        <Event event="Lunch Break"/>
                        <Event event="Lunch Break"/>

                    </tr>
                    <tr>
                        <td className="time">03 pm </td>
                        <Event event="Work" color="green" />
                        <Event event="Business" color="purple"/>
                        <Event event="Other class" color="orange"/>
                         <Event event="Work" color="green" />
                        <Event event="Other class" color="orange"/>
                         <Event event="Work" color="green" />
                         <Event event="Work" color="green" />
                    </tr>
                    <tr>
                        <td className="time">04 pm </td>
                        <Event event="Work" color="green" />
                        <Event event="Business" color="purple"/>
                        <Event event="Other class" color="orange"/>
                         <Event event="Work" color="green" />
                        <Event event="Other class" color="orange"/>
                         <Event event="Work" color="green" />
                         <Event event="Work" color="green" />
                    </tr>
                    <tr>
                        <td className="time">05 pm </td>
                        <Event event="Work" color="green" />
                        <Event event="Music" color="blue"/>
                        <Event event="Accounting" color="pink" />
                         <Event event="Work" color="green" />
                        <Event event="Accounting" color="pink" />
                         <Event event="Work" color="green" />
                         <Event event="Work" color="green" />
                    </tr>
                    <tr>
                        <td className="time">06 pm </td>
                        <Event event="Commute home" color="grey" />
                        <Event event="Accounting" color="pink" />
                        <Event event="Accounting" color="pink" />
                        <Event event="Commute home" color="grey" />
                        <Event event="Accounting" color="pink" />
                        <Event event="Commute home" color="grey" />
                        <Event event="Commute home" color="grey" />
                    </tr>
                    <tr>
                        <td className="time">07 pm </td>
                        <Event event="Rest"/>
                        <Event event="Accounting" color="pink" />
                        <Event event="Commute home" color="grey" />
                        <Event event="Rest"/>
                        <Event event="Commute home" color="grey" />
                        <Event event="Rest"/>
                        <Event event="Rest"/>
                    </tr>
                    <tr>
                        <td className="time">08 pm </td>
                        <Event event="Business" color="purple"/>
                        <Event event="Other class" color="orange"/>
                        <Event event="Cooking" />
                        <Event event="Business" color="purple"/>
                        <Event event="Cooking" />
                        <Event event="Business" color="purple"/>
                        <Event event="Music" color="blue"/>
                    </tr>
                    <tr>
                        <td className="time">09 pm </td>
                        <Event event="Business" color="purple"/>
                        <Event event="Other class" color="orange"/>
                        <Event event="Cooking" />
                        <Event event="Business" color="purple"/>
                        <Event event="Cooking" />
                        <Event event="Business" color="purple"/>
                        <Event event="Movie / Me time" color="pink-turquoise"/>
                    </tr>
                    <tr>
                        <td className="time">10 pm </td>
                        <Event event="Dinner then bed" />
                        <Event event="Dinner then bed" />
                        <Event event="Dinner then bed" />
                        <Event event="Dinner then bed" />
                        <Event event="Dinner then bed" />
                        <Event event="Dinner then bed" />
                        <Event event="Movie / Me time" color="pink-turquoise"/>
                    </tr>
                </tbody> 
            </table>

        </div>

       


    )

}

export default Calendar;