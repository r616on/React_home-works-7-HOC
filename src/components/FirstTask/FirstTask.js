import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./desktop.scss";
import { formatDistanceToNow } from "date-fns";
import ru from "date-fns/locale/ru";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function DateTimeUpdate(Components) {
  return function Wraper(props) {
    const { date } = props;
    const updateDate = formatDistanceToNow(new Date(date), {
      locale: ru,
      addSuffix: true,
    });

    return <Components {...props} date={updateDate} />;
  };
}
const ModifidDate = DateTimeUpdate(DateTime);
function Video(props) {
  return (
    <div className="video">
      <iframe
        title={props.url}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <ModifidDate date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => (
    <Video key={item.id} url={item.url} date={item.date} />
  ));
}

export default function FirstTask() {
  // eslint-disable-next-line
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
      id: uuidv4(),
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
      id: uuidv4(),
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
      id: uuidv4(),
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
      id: uuidv4(),
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
      id: uuidv4(),
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2021-12-02 23:16:00",
      id: uuidv4(),
    },
  ]);

  return <VideoList list={list} />;
}
