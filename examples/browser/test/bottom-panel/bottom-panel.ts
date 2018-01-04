import "webdriverio";

export class BottomPanel {

    constructor(protected readonly driver: WebdriverIO.Client<void>) { }

    doesTabExist(tabName: string): boolean {
        return this.driver.element(`.p-Widget.p-TabBar.theia-SideBar.theia-mod-bottom .p-TabBar-content`).isExisting(`div\=${tabName}`);
    }

    isTabActive(tabName: string): boolean {
        const tab = this.driver.element(`.p-Widget.p-TabBar.theia-SideBar.theia-mod-bottom .p-TabBar-content`).element(`div\=${tabName}`);
        /* Check if the parent li container has the p-mod-current class which makes it active*/
        return (tab.$(`..`).getAttribute('class').split(' ').indexOf('p-mod-current') > -1);
    }

    openCloseTab(tabName: string) {
        this.driver.element(`.p-Widget.p-TabBar.theia-SideBar.theia-mod-bottom .p-TabBar-content`).click(`div\=${tabName}`);
    }

    isProblemsViewVisible(): boolean {
        return this.driver.isExisting('.p-Widget div.theia-marker-container');
    }

    closeProblemsView() {
        this.driver.element(`.p-Widget.p-TabBar .p-TabBar-tab.p-mod-closable`).rightClick(`div\=Problems`);
        this.driver.element(`.p-Widget.p-Menu .p-Menu-content`).click(`div\=Close`);
    }

}
