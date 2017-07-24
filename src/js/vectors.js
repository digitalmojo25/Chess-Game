export function northWest (v) {
  let vector = {}
  vector.x = v.x + 1
  vector.y = v.y - 1
  return vector
}

export function northEast (v) {
  let vector = {}
  vector.x = v.x + 1
  vector.y = v.y + 1
  return vector
}

export function southEast (v) {
  let vector = {}
  vector.x = v.x - 1
  vector.y = v.y + 1
  return vector
}

export function southWest (v) {
  let vector = {}
  vector.x = v.x - 1
  vector.y = v.y - 1
  return vector
}

export function isBoard (v) {
  if (v.x >= 0 && v.x <= 7 && v.y >= 0 && v.y <= 7) {
    return true
  }
  return false
}