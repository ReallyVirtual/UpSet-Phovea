/**
 * Created by Caleydo Team on 31.08.2016.
 */

import * as d3 from 'd3';
import datasets, {IDataSetSpec} from './datasets';
import * as SetData from './SetData';
import * as SetView from './SetView';
import {setData} from "./SetData";


//import * as data from './parsefile';
/**
 * The main class for the App app
 */
export class App {

  private $node;

  constructor(parent:Element) {
    this.$node = d3.select(parent);
    this.$node.append('div').attr('id','setview');
  }

  /**
   * Initialize the view and return a promise
   * that is resolved as soon the view is completely initialized.
   * @returns {Promise<App>}
   */
  init() {

    return this.build();
  }

  /**
   * Load and initialize all necessary views
   * @returns {Promise<App>}
   */
  private build() {
    let setView = SetView.create(this.$node.select('#setview').node());
    console.log(setView);
    let setdata = SetData.create(datasets);
    setView.init(SetData.create(datasets));

    //console.log(setdata.attributename);
    this.$node.select('h3').remove();
    this.setBusy(false);
    return Promise.resolve(null);
  }




  /**
   * Show or hide the application loading indicator
   * @param isBusy
   */
  setBusy(isBusy: boolean) {
   this.$node.select('.busy').classed('hidden', !isBusy);
  }

}

/**
 * Factory method to create a new app instance
 * @param parent
 * @returns {App}
 */
export function create(parent:Element) {
  return new App(parent);
}
