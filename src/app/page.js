import Card from '../components/Card';
import Quote from '../components/Quote';

const HomePage = () => {
  return (
    <>
      <Quote />
      <div className="maincontainer">
        <Card link="/C_Programming" imgSrc="/Logo/C_Logo.png" title="C PROGRAMMING">
          Meet C, the trailblazing programming language by Dennis Ritchie. Birthed in the '70s, C is a powerhouse known for efficiency and low-level control.Dive into C's simplicity and unleash its potential as you explore the building blocks of modern software development.
        </Card>
        <Card link="/C++_Basics" imgSrc="/Logo/c--logo-icon-0.png" title="C++ PROGRAMMING">
          C++ is a versatile, object-oriented programming language. Developed as an extension of the C language, it adds features like classes and objects, enabling efficient code organization and reuse. Widely used in software development, C++ empowers developers with a robust toolset.It is useful for CP.
        </Card>
        <Card link="/python_Basics" imgSrc="/Logo/pngegg.png" title="PYTHON BASICS">
          Python, a high-level programming language, is celebrated for its readability and simplicity. With a rich ecosystem of libraries and frameworks, Python is versatile, making it ideal for web development, data analysis, artificial intelligence, and machine learning, Deep learning.
        </Card>
        <Card link="/OOP" imgSrc="/Logo/1200px-OOP.svg.png" title="OBJECT ORIENTED PROGRAMMING [OOP]">
          Object-Oriented Programming is a paradigm that organizes Objects represent real-world entities and interact through defined interfaces,Encapsulation, inheritance, and polymorphism are key OOP principles, enhancing code modularity and reusability.
        </Card>
        <Card link="/STL" imgSrc="/Logo/1lOZAtF1V7j9TeKjwbiv6UQ.jpg" title="STANDARD TEMPLATE LIBRARY [STL]">
          The Standard Template Library (STL) in C++ is a powerful set of template classes and functions. It provides essential data structures, algorithms, and iterators, promoting code efficiency and reuse. Widely used in C++ programming, STL enhances productivity by offering robust containers and algorithms, facilitating rapid and reliable software development.It is useful in Competitive Programming and in many more.
        </Card>
        <Card link="/WebApp" imgSrc="/Logo/pngwing.com (1).png" title="WEB APPLICATION FUNDAMENTALS">
          Web technology encompasses a broad range of tools and protocols for creating, transmitting, and displaying content on the internet. It includes HTML, CSS, and JavaScript for frontend development, while backend technologies handle server-side processes. Web technology continually evolves, driving innovations like APIs and frameworks, shaping the dynamic landscape of online experiences.
        </Card>
        <Card link="/algorithm" imgSrc="/Logo/design_algorithm_method_model_pr.png" title="ALGORITHM DESIGN TECHNIQUES">
          Algorithm design techniques involve crafting efficient, logical sequences to solve computational problems. Divided into strategies like Divide and Conquer, Dynamic Programming, and Greedy Algorithms, these techniques optimize solutions. Mastering these techniques empowers programmers to devise scalable, resource-efficient algorithms, essential for effective problem-solving.
        </Card>
        <Card link="/JavaBasic" imgSrc="/Logo/731_java.png" title="JAVA BASICS">
          Java, a versatile programming language, emphasizes portability and platform independence. Key concepts include classes, objects,inheritance, and polymorphism. Java applications are run in a virtual machine (JVM), enabling widespread deployment. The language's simplicity and versatility make it a fundamental choice in software development.It has many frameworks useful for applications development.Java is class and object based programming language.
        </Card>
        <Card link="/linux" imgSrc="/Logo/linux_PNG1.png" title="LINUX BASICS">
          Linux, an open-source operating system, offers a robust, secure environment for computing. It employs a multi-user, multitasking model and provides a command-line interface. Key components include the kernel, shell, and file system. Linux supports a wide range of software applications, servers, and embedded systems, fostering flexibility and customization in computing environments.
        </Card>
        <Card link="/golang" imgSrc="/Logo/png-clipart-go-computer-programm.png" title="GOLANG BASICS">
          Go, also known as Golang, is a statically typed, compiled programming language developed by Google. It emphasizes simplicity, efficiency, and concurrency support. With a clean syntax and garbage collection, Go facilitates rapid development. Its built-in concurrency primitives enable scalable and efficient concurrent programming. Go is widely used in web development, cloud computing, and system programming.
        </Card>
        <Card link="/frontendProjects" imgSrc="/Logo/pngwing.com (2).png" title="FRONTEND PROJECTS">
          Frontend technology focuses on the user interface and user experience of websites and applications. Key components include HTML for structure, CSS for styling, and JavaScript for interactivity. Modern frameworks like React, Angular, and Vue enhance frontend development, providing tools for building responsive, dynamic, and engaging interfaces. Frontend technology plays a crucial role in shaping digital interactions.
        </Card>
        <Card link="/Vector" imgSrc="/Logo/vector.jpeg" title="VECTOR DATA STRUCTURE">
          A vector is a dynamic data structure that stores elements in contiguous memory locations, allowing efficient random access. It automatically adjusts its size to accommodate elements, making it versatile for dynamic collections. Vectors provide constant-time access to elements and support various operations, making them widely used in programming for their simplicity and performance. It dynamically allocates memory, ensuring fast and direct access to elements, making it ideal for scenarios where size changes frequently.
        </Card>
      </div>
    </>
  );
};

export default HomePage;
