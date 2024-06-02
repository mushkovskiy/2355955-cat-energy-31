/* в этот файл добавляет скрипты*/
export default class Toggler {
  static targetClassName = 'page-navigation__toggle';
  static menuClosedClassName = 'page-navigation__toggle--menu-closed';
  static menuOpenClassName = 'page-navigation__toggle--menu-opened';
  static navigationListClassName = 'page-navigation__list';
  static navigationListVisibleClassName = 'page-navigation__list--visible';
  navigationListElement = this.getNavigationList();

  toggleMenuClosedState = (event) => {

    const isTargetElement = event.target.classList.contains(Toggler.targetClassName);

    if (!isTargetElement) {
      return;
    }

    const isClosedMenu = !!event.target.classList.contains(Toggler.menuClosedClassName);

    if (isClosedMenu) {
      event.target.classList.remove(Toggler.menuClosedClassName);
      event.target.classList.add(Toggler.menuOpenClassName);
      this.navigationListElement.classList.add(Toggler.navigationListVisibleClassName);

    } else {
      event.target.classList.remove(Toggler.menuOpenClassName);
      event.target.classList.add(Toggler.menuClosedClassName);
      this.navigationListElement.classList.remove(Toggler.navigationListVisibleClassName);
    }

  };

  getNavigationList() {
    const navigationListElement = document.querySelector(`.${Toggler.navigationListClassName}`);
    return navigationListElement;

  }
}
