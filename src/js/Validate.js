export class Validate {
  constructor(selector, calback) {
    this.$el=document.querySelector(selector)
    this.nodes=[...this.$el.querySelectorAll('input[data-rules]')]
    this.valid=false
    this.fn=calback
  }

  _showMessage(el) {
    const msg=el.nextElementSibling
    if (el.value.length>0) {
      msg.classList.remove('show')
      return true
    } else {
      msg.classList.add('show')
      return false
    }
  }


  val() {
    this.valid=this.nodes
        .map(this._showMessage)
    const secsess=this.valid.every((el) => el)

    if (secsess) {
      // eslint-disable-next-line no-undef
      this.fn(this.nodes)
    } else {
      return false
    }
  }
}


// document.querySelector('.mein__form').addEventListener('submit', (e) => {
//   e.preventDefault()

//   const validate=new Validate('.mein__form', (data) => {
//     for (const item of data) {
//       console.log(item.value)
//       item.value=''
//     }
//   })

//   validate.val()
// })
