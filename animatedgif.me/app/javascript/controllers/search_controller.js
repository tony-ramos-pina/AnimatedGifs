// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller 
{
  static targets = [ "field" ]

  focus(event)
  {
      if(event.key == "Enter")
      {
            window.location = `/${this.fieldTarget.value}`
      }else if(event.key =="/" && document.activeElement != this.fieldTarget)
        {
            event.preventDefault()
            this.fieldTarget.focus()
        }
      
  }

}