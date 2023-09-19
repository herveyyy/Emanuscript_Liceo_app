import { Avatar, Typography, Card, CardHeader,CardBody, Button, Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Rated() {
    return ( 
        <div className="flex justify-center mt-6">
      <div className="absolute flex justify-center items-center mb-[20rem] px-1">
          <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
              <Avatar src="static/images/khian.png" alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>Khian Justice A. Abad</h1>
              <h2>kabad37796@liceo.edu.ph</h2>
          </div>
      </div>
      <div className="flex justify-center items-center mt-[8rem]">
          <div className="bg-red-900 rounded-md">
              <ul className="flex justify-evenly cursor-pointer">
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  <Link to='AccountSettings'>Account</Link>
                </Typography>
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  <Link to='Bookmark'>Bookmark</Link>
                </Typography>
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  Rated
                </Typography>
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  History
                </Typography>
              </ul>
          </div>
        <div className="flex flex-wrap absolute mt-[31rem] gap-3 justify-center">
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
        <Rating unratedColor="amber" ratedColor="amber" />
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
        <Rating unratedColor="amber" ratedColor="amber" />
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
        <Rating unratedColor="amber" ratedColor="amber" />
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
        <Rating unratedColor="amber" ratedColor="amber" />
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
        <Rating unratedColor="amber" ratedColor="amber" />
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
        <Rating unratedColor="amber" ratedColor="amber" />
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

export default Rated;