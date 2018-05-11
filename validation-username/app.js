function validateUsr(username) {
  res =  /^[a-z0-9\_]{4,16}$/.test(username)

  return res
}

