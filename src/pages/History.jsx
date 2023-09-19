import { Avatar, Typography, Card, CardHeader,CardBody, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AccountTabs from "../components/AccountTabs";

function History() {
    return ( 
        <div className=" min-h-screen">
      <div className=" flex justify-center items-center mb-[2rem] px-1">
          <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
              <Avatar src="static/images/khian.png" alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>Khian Justice A. Abad</h1>
              <h2>kabad37796@liceo.edu.ph</h2>
       
      </div>
      </div>
      <div className="flex w-full justify-center my-4">
        <AccountTabs/>
        </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap  gap-3 justify-center">
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Read Again
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Read Again
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Read Again
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Read Again
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Read Again
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Read Again
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        </div>
      </div>
    </div>
     );
}

export default History;