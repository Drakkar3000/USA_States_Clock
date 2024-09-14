import { fetchStates } from './fetchStates.js';
import { checkWinterOrSummerTime } from './updateSummerAndWinterTime.js';

class CreateClockForState {
    constructor(name) {
      this.name = name;
      this.element = null;
      this.noSpacesName = this.name.trim().replaceAll(' ', '');
    };

    render() {
        const clockForState = document.querySelector('#clockForState');
       
        if (document.querySelector(`.section${this.noSpacesName}`)) {
            return;
        };
       
        const timeSection = document.createElement('section');
        timeSection.classList.add('stateSection', `section${this.noSpacesName}`);
       
        timeSection.innerHTML = `
            <div>
              ${this.name}
            </div>
            <div class="watch clock-state-${this.noSpacesName}">
              <span class="clockElement hours">
                00
              </span>
              <span class="clockElement minutes">
                00
              </span>
              <span class="clockElement seconds">
                00
              </span>
            </div>
    
            <div id="removeButton${this.noSpacesName}" class="removeState">
              <svg fill="#000000" width="68px" height="68px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg>
            </div >
        `;
       
       
        clockForState.appendChild(timeSection);
        this.element = timeSection;
       
        const removeButton = document.querySelector(`#removeButton${this.noSpacesName}`);
        
        removeButton.addEventListener('click', () => this.removeState());
    };

    removeState() {
        this.element.remove();
       
        localStorage.removeItem(`state${this.noSpacesName}`);
      
        document.querySelector(`.searchState${this.noSpacesName}`).hidden = false;
       
       localStorage.removeItem(`hidden${this.noSpacesName}`);
    };
};
