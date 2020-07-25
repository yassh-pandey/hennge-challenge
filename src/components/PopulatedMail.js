import React from 'react'
import '../styles/PopulatedMail.css'
import MailHeader from './MailHeader'
import MailCard from './MailCard';
import Calendar from './Calendar';
import ResultsTitle from './ResultsTitle';
const emailInfoArray = [
    {
        from: "aaa@example.com",
        to: ["zzz.zzz@example.com"],
        subject: "[ HR-888 ] Notice of official announcement",
        date: "0:20",
        attachment: false,
        id: "1"
    },
    {
        from: "bbb.bbbb@example.com",
        to: ["yyy@example.com"],
        subject: `[web 333] "Web Contact"`,
        date: "0:10",
        attachment: false,
        id: "2"
    },
    {
        from: "ccc@example.com",
        to: ["xxx@example.com", "www.www@example.com"],
        subject: "Happy New Year! Greetings for the New Year",
        date: "0:00",
        attachment: true,
        id: "3"
    },
    {
        from: "ddd.dddd@example.com",
        to: ["vvv.vvv@example.com", "uuu@example.com"],
        subject: "[HR-887(Revised: Office Expansion Project Team)]Notice of official announcement",
        date: "Jan 01",
        attachment: false,
        id: "4"
    },
    {
        from: "eee@example.com",
        to: ["sss@example.com", "rrr.rrrr@example.com", "xxx@example.com"],
        subject: "[Github] Logout page",
        date: "Jan 01",
        attachment: false,
        id: "5"
    },
    {
        from: "fff.fff@example.com",
        to: ["qqq.qqq@example.com"],
        subject: "[dev] Postfix 3.1.12/3.2.9/3.3.4/3.4.5",
        date: "Jan 01",
        attachment: false,
        id: "6"
    },
    {
        from: "ggg@example.com",
        to: ["ppp@example.com"],
        subject: "Re: [Github] Brush-up on loading animation",
        date: "Jan 01",
        attachment: false,
        id: "7"
    },
    {
        from: "hhh.hhh@example.com",
        to: ["ooo.ooo@example.com"],
        subject: "Workplace Summary For sample, Inc.: Jun 2 - Jun 9",
        date: "Jan 01",
        attachment: true,
        id: "8"
    },
    {
        from: "iii@example.com",
        to: ["nnn@example.com"],
        subject: "I love you",
        date: "2019/12/31",
        attachment: true,
        id: "9"
    },
    {
        from: "Pable-Diego@example.com",
        to: ["Pablo-Diego@example.com"],
        subject: "[info: 888] ABC EQUIPMENT COMPANY",
        date: "2019/12/31",
        attachment: false,
        id: "10"
    }
];
function PopulatedMail() {
    return (
        <div className="PopulatedMailContainer">

            <div className="populatedMailCalendarContainer">
                <Calendar />
            </div>

            <div className="populatedMailResultsTitleContainer">
                <ResultsTitle noOfResults={10}/>
            </div>

            <div className="populatedMailMailHeaderContainer">
                <MailHeader />
            </div>

            <div className="populatedMailMailCardsContainer">
                {
                    emailInfoArray.map((emailInfo)=>
                        (
                            <MailCard to={emailInfo.to} from={emailInfo.from} 
                            subject={emailInfo.subject} date={emailInfo.date}
                            key={emailInfo.id} attachment={emailInfo.attachment}
                            id={`mailCard${emailInfo.id}`}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default PopulatedMail
