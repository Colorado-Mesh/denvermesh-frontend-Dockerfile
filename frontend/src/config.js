/** Volto Project Configuration
 * The recommended way for configuring a Volto project is using an add-on.
 * The project should only be considered as boilerplate, and all the code and
 * configuration should happen and be placed in add-ons.
 *
 * Both configuring directly and placing code in a project is discouraged, and might be
 * removed at some point from Volto.
 *
 * The local project is left for backwards compatibility for existing projects.
 */
import {
  MattermostViewBlock,
  MattermostEditBlock,
} from 'addons/volto-frontend/src/components';

import View01 from 'addons/volto-frontend/src/components/Blocks/newDonateBlock/View';
import Schema01 from 'addons/volto-frontend/src/components/Blocks/newDonateBlock/Schema';

import {
  FocomapEditBlock,
  FocomapViewBlock,
} from 'addons/volto-frontend/src/components';

import View02 from 'addons/volto-frontend/src/components/Blocks/newNetBlock/View';
import Schema02 from 'addons/volto-frontend/src/components/Blocks/newNetBlock/Schema';

import {
  MeshmapEditBlock,
  MeshmapViewBlock,
} from './addons/volto-frontend/src/components';

import {
  MainsliderEditBlock,
  MainsliderViewBlock,
} from 'addons/volto-frontend/src/components';

import {
  WestSliderEditBlock,
  WestSliderViewBlock,
} from 'addons/volto-frontend/src/components';

import {
  EffortsEditBlock,
  EffortsViewBlock,
} from 'addons/volto-frontend/src/components';

import {
  NewsEditBlock,
  NewsViewBlock,
} from 'addons/volto-frontend/src/components';

import {
  EventEditBlock,
  EventViewBlock,
} from 'addons/volto-frontend/src/components';

import sliderSVG from '@plone/volto/icons/slider.svg';
import imagesSVG from '@plone/volto/icons/images.svg';

import View04 from 'addons/volto-frontend/src/components/Blocks/newMeetingBlock/View';
import Schema04 from 'addons/volto-frontend/src/components/Blocks/newMeetingBlock/Schema';
import VariationView0401 from 'addons/volto-frontend/src/components/Blocks/newMeetingBlock/VariationView01';
import VariationView0402 from 'addons/volto-frontend/src/components/Blocks/newMeetingBlock/VariationView02';
import schemaEnhancerBlock04Variation02 from 'addons/volto-frontend/src/components/Blocks/newMeetingBlock/enhancers';

// [Internal] All the imports of modules required for the configuration *must* happen
// here BEFORE the following line
import '@plone/volto/config';

export default function applyConfig(config) {
  config.blocks.blocksConfig.mattermostBlock = {
    id: 'mattermostBlock',
    title: 'Mattermost Block',
    icon: sliderSVG,
    group: 'common',
    view: MattermostViewBlock,
    edit: MattermostEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.block01 = {
    id: 'block01', // this is the block id, it must match the id on the previous line
    title: 'New Donate Block', // this is the block title
    view: View01, // this is the block's view component
    // We do not need a specific edit component, Volto will use the default
    // edit: null;
    blockSchema: Schema01, // this is the schema that will be used to render the edit form
    icon: imagesSVG, // this is the image that will be shown in the block selector
    sidebarTab: 1, // this is set to 1 to have the `Block` tab selected in the sidebar
    // editor when editing this block
    group: 'common', // to show the block in the block select under the `common` category
  };

  config.blocks.blocksConfig.focomapBlock = {
    id: 'focomapBlock',
    title: 'FoCoMap Block',
    icon: sliderSVG,
    group: 'common',
    view: FocomapViewBlock,
    edit: FocomapEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.block02 = {
    id: 'block02', // this is the block id, it must match the id on the previous line
    title: 'New Net Block', // this is the block title
    view: View02, // this is the block's view component
    // We do not need a specific edit component, Volto will use the default
    // edit: null;
    blockSchema: Schema02, // this is the schema that will be used to render the edit form
    icon: imagesSVG, // this is the image that will be shown in the block selector
    sidebarTab: 1, // this is set to 1 to have the `Block` tab selected in the sidebar
    // editor when editing this block
    group: 'common', // to show the block in the block select under the `common` category
  };

  config.blocks.blocksConfig.meshmapBlock = {
    id: 'meshmapBlock',
    title: 'MeshMap Block',
    icon: sliderSVG,
    group: 'common',
    view: MeshmapViewBlock,
    edit: MeshmapEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.mainSliderBlock = {
    id: 'mainSliderBlock',
    title: 'Main Slider Block',
    icon: sliderSVG,
    group: 'common',
    view: MainsliderViewBlock,
    edit: MainsliderEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.westSliderBlock = {
    id: 'westSliderBlock',
    title: 'West Slope Slider Block',
    icon: sliderSVG,
    group: 'common',
    view: WestSliderViewBlock,
    edit: WestSliderEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.effortsSliderBlock = {
    id: 'effortsSliderBlock',
    title: 'Community Efforts Slider Block',
    icon: sliderSVG,
    group: 'common',
    view: EffortsViewBlock,
    edit: EffortsEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.newsBlock = {
    id: 'newsBlock',
    title: 'News Slider Block',
    icon: sliderSVG,
    group: 'common',
    view: NewsViewBlock,
    edit: NewsEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.eventsBlock = {
    id: 'eventsBlock',
    title: 'Events Slider Block',
    icon: sliderSVG,
    group: 'common',
    view: EventViewBlock,
    edit: EventEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.block04 = {
    id: 'block04', // this is the block id, it must match the id on the previous line
    title: 'New Meeting Block', // this is the block title
    view: View04, // this is the block's view component
    // We do not need a specific edit component, Volto will use the default
    // edit: null,
    blockSchema: Schema04, // this is the schema that will be used to render the edit form
    icon: imagesSVG, // this is the image that will be shown in the block selector
    group: 'common',
    sidebarTab: 1, // this is set to 1 to have the `Block` tab selected in the sidebar
    // editor when editing this block these are the variations available for this block
    // these are the variations available for this block
    variations: [
      {
        id: 'variation01', // this is the id of the variation
        title: 'Variation 01', // this is the title of the variation
        isDefault: true, // this signals if this is the default variation for this block
        template: VariationView0401, // this is the component that will render
        // the variation
      },
      {
        id: 'variation02',
        title: 'Variation 02',
        isDefault: false,
        template: VariationView0402,
        schemaEnhancer: schemaEnhancerBlock04Variation02, // this is the schema enhancer
        // definition
      },
    ],
  };

  config.settings.externalRoutes = [{ match: '/mattermost' }];

  return config;
}
