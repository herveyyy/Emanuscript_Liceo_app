import React from 'react'
import { useParams } from "react-router-dom";
const Manuscript = () => {
    const { id } = useParams();

  return (
    <div>ManuscriptID{id}</div>
  )
}

export default Manuscript