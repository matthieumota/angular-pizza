export class User {
  name: string
  firstname: string
  birthday: string
  avatar: string

  constructor(name: string, firstname: string, birthday: string, avatar: string) {
    this.name = name
    this.firstname = firstname
    this.birthday = birthday
    this.avatar = avatar
  }

  age() {
    const birthday = new Date(this.birthday)
    const today = new Date()

    let age = today.getFullYear() - birthday.getFullYear()

    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
      age--
    }

    return age
  }
}
