import React from "react"
import { useState } from "react"

function MovieEdit({ editMovie, saveEditMovie }) {
  const [name, SetMovie] = useState(editMovie.name)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    saveEditMovie({ id: editMovie.id, name: name })
  }
  const onChangeHandler = (event) => {
    SetMovie(event.target.value)
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          className="inputer-mini"
          placeholder="Edit the movie name"
          value={name}
          onChange={onChangeHandler}
        />
        <input className="inputer-btn-mini" type="submit" value="save" />
      </form>
    </div>
  )
}

export default MovieEdit
