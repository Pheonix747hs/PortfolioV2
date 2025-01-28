import { Timeline } from "@/Components/ui/timeline";
import "../styles.css";

export function TimelineDemo() {
  const data = [
    {
      title: "July 24 - July 25 4th Year",
      content: (
        <div>
          <p className="text-white text-left text-lg font-normal mb-4">
            <p>
              This is the year everything was building upto, the final streach.
              Most of this year is being spent studying for exams and polishing
              my skills for placement
            </p>
            <p className="pt-3">
              I have also undertaken my most ambitious project yet, building a
              full fledged AR Individual learning Application,{" "}
              <a
                href="https://github.com/Pheonix747hs/WPF_PDF "
                target="_blank"
                className="link"
              >{`{ARia}`}</a>
              for short.
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "July 23 - June 24 3rd Year",
      content: (
        <div>
          <p className="text-white text-left text-lg font-normal mb-4">
            <p>
              My third year is when i got the first taste of real life projects,
              during this year we were expected to complete a 1-4 month
              internship while keeping a record of each day.
            </p>
            <p className="pt-3">
              I was able to secure 2 internships in the 2nd semester where i got
              to work on multiple Web frameworks and also gained familiarity
              with both backend and frontend technologies.{"   "}
              <a
                href="https://github.com/Pheonix747hs/xpedio-student-interns "
                target="_blank"
                className="link"
              >{`{xpedio-student-interns}`}</a>
              {"\n"}
              <a
                href="https://github.com/Pheonix747hs/Website-for-Financial-Client"
                target="_blank"
                className="link"
              >{`{Website-for-Financial-Client}`}</a>
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Aug 22 - June 23 2nd Year",
      content: (
        <div>
          <p className="text-white text-left text-lg font-normal mb-4">
            <p>
              During my second year, most of my time was dedicated to studying,
              as the curriculum became significantly more challenging.
            </p>
            <p className="pt-3">
              Alongside my academic pursuits, I also took the opportunity to
              deepen my understanding of C#. One of my most notable projects
              during this time was creating a PDF reader using the .NET
              framework
              <a
                href="https://github.com/Pheonix747hs/WPF_PDF "
                target="_blank"
                className="link"
              >{`{WPF_PDF}`}</a>
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Jan - July 2022 First Year",
      content: (
        <div>
          <p className="text-white text-left text-lg font-normal mb-4">
            <p>
              My first year started in January 2022, I had chosen to purse BE
              Computer Engineering degree which was a product of my passion and
              love for coding
            </p>
            <p className="pt-3">
              Going along with the spirit of progression, I decided to learn
              low-level languages and got into C# because of its use in gaming,
              one of my favorite hobbies. After a few months messing around in
              Unity, I created a small playground where my character can run,
              slide, jump, wall-run, and grapple.
              <a
                href="https://github.com/Pheonix747hs/basic-movement-unity "
                target="_blank"
                className="link"
              >{`{Unity Movement}`}</a>
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Early 2020",
      content: (
        <div>
          <p className="text-white text-left text-lg font-normal mb-4">
            <p>
              Around this time i was studying in 12th grade and had decided id
              be following the Engineering stream in life, most of this time
              period upto 2021 was spent preparing for entrance exams [JEE and
              CET]
            </p>
            <p className="pt-3">
              During this time along with studies i also kept exploring
              AutoHotkey and Python, after messing around with the windows API i
              created another application in Autohotkey called{" "}
              <a
                href="https://github.com/Pheonix747hs/Battery-Alert"
                target="_blank"
                className="link"
              >
                Battery Alert
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/Pheonix747hs/microphone-toggle"
                target="_blank"
                className="link"
              >
                {" "}
                Microphone Toggle
              </a>
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="text-white text-left text-lg font-normal mb-4">
            <p>
              I got into coding back in 10th grade, during my final year of
              school. The first language I worked with was a pretty niche one
              called AutoHotkey.
            </p>
            {"\n "}
            <p className="pt-3">
              At the time, I just wanted to create a script that would
              automatically add songs to my Spotify playlists whenever I hit
              specific hotkeys. This eventually lead to the final version{" "}
              <a
                href="https://github.com/Pheonix747hs/spotify-controller"
                target="_blank"
                className="link"
              >
                {" "}
                Spotify Controller V3
              </a>
            </p>
            {"\n "}
            <p className="pt-3">
              By the time I finished the project, I realized I actually enjoyed
              the whole process. That first experience sparked my passion for
              programming, setting the foundation for my journey into the world
              of technology.
            </p>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div
      className="w-full"
      style={{
        width: "100vw", // Set a width for the scrollable container
        height: "100vh", // Set a height for the scrollable container
        overflowY: "auto", // Enable vertical scrolling
        overflowX: "hidden", // Disable horizontal scrolling
        zIndex: 100,
      }}
    >
      <Timeline data={data} />
    </div>
  );
}
