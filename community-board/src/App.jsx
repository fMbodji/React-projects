import './App.css';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {

  const courses =  [
    { imageURL:"/images/cpp.jpg", 
      courseNum:"CMSC 140", 
      courseName:"Intro to Programming", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"
    },
    { imageURL:"images/java.jpg", 
      courseNum:"CMSC 203", 
      courseName:"Computer Science I", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"
    },
    { imageURL:"/images/java.jpg",
      courseNum:"CMSC 204", 
      courseName:"Computer Science I", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"
    },
    { imageURL:"/images/207.jpg", 
      courseNum:"CMSC 207", 
      courseName:"Intro to Discrete Structures", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"
    },
    { imageURL:"/images/calc.jpg", 
      courseNum:"MATH 181", 
      courseName:"Calculus I", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=MATH&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"
    },
    { imageURL:"/images/calc.jpg", 
      courseNum:"MATH 182", 
      courseName:"Calculus II", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=MATH&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"

    },
    { imageURL:"/images/LA.jpg", 
      courseNum:"MATH 284", 
      courseName:"Linear Algebra", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=MATH&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"

    },
    { imageURL:"/images/py.jpg", 
      courseNum:"CMSC 206", 
      courseName:"Python Programming", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"

    },
    { imageURL:"/images/216.jpg", 
      courseNum:"CMSC 216", 
      courseName:"Intro to Computer Systems", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"

    },
     { imageURL:"/images/curm.jpg", 
      courseNum:"CMSC 299", 
      courseName:"Special Topics in CS & Technologies", 
      link: "https://catalog.montgomerycollege.edu/content.php?filter%5B27%5D=CMSC&filter%5B29%5D=&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=17&expand=&navoid=3188&search_database=Filter#acalog_template_course_filter"

    },
  ]

  return (
    <div className="App">

      <header className="App-header">
        <h1>Welcome to the Montgomery College Computer Science Community</h1>
        <h3>Hi, fellow Computer Science majors. Here is a list of 06 (required) computer science and math courses, and 04 potential course electives to get your Associate Degree at MC!</h3>
      </header>

      <div className="content">
        { courses.map( course => (
          <Card
          image = {course.imageURL}
          courseNum = {course.courseNum}
          courseName = {course.courseName}
          link = {course.link}
          />
          ) )
        } 
      </div>
      
      
    </div>


    
  )

}

export default App ;