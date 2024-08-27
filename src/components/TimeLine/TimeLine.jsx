// import React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import { Event } from "@mui/icons-material";
// import Typography from "@mui/material/Typography";

// const TimeLine = ({ timelines = [] }) => {
//   return (
//     <div>
//       <Timeline position="alternate">
//         {timelines.map((item, index) => (
//           <TimelineItem key={index}>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               align="right"
//               variant="body2"
//               color="text.secondary"
//             >
//             09/07/2024
//             </TimelineOppositeContent>

//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot>
//                 <Event />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6">Title</Typography>
//               <Typography>Description</Typography>
//             </TimelineContent>
//           </TimelineItem>
//         ))}
//       </Timeline>
//     </div>
//   );
// };

// export default TimeLine;
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [], heading = "Education" }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

const EducationTimeline = () => {
  const timelineData = [
    {
      date: "July 2021",
      title: "HSC Degree",
      description: "Completed Higher Secondary Certificate (HSC) from RJ College of Arts, Science, and Commerce with an 82% score.",
    },
    {
      date: "August 2025",
      title: "BTech Degree",
      description: "Pursuing(Final Year) a Bachelor of Technology in Computer Science Engineering at Walchand Institute of Technology.",
    },
  ];

  return <TimeLine timelines={timelineData} />;
};

export default EducationTimeline;
