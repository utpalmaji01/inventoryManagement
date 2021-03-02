import React from 'react';
import Box from '@material-ui/core/Box';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/material';
import NestedMenu from '@mui-treasury/components/menu/nested';
import './menu_drawer.scss';

const MaterialNestedMenuStyle = () => {
  return (
    <Box minWidth={200} className="side-drawer">
      <NestedMenu menus={getMenus()} useStyles={useMaterialNestedMenuStyles} />
    </Box>
  );
};

const getMenus = () => [
  {
    key: 'dashboard',
    label: 'Dashboard',
  },
  {
    key: 'customers',
    label: 'Customers',
  },
  {
    key: 'vendors',
    label: 'Vendors',
  },
  {
    key: 'items',
    label: 'Items',
  },
  {
    key: 'masters',
    label: 'Masters',
    isToggleOutside: true,
    subMenus: [
      {
        key: 'billSundries',
        label: 'Bill Sundries',
      },
      {
        key: 'Brands',
        label: 'Brands',
      },
      {
        key: 'Catagories',
        label: 'Catagories',
      },
      {
        key: 'Cities',
        label: 'Cities',
      },
      {
        key: 'Countries',
        label: 'Countries',
      },
      {
        key: 'Currencies',
        label: 'Currencies',
      },
      {
        key: 'GST Treatments',
        label: 'GST Treatments',
      },
      {
        key: 'Item Groups',
        label: 'Item Groups',
      },
      {
        key: 'Manufactures',
        label: 'Manufactures',
      },
      {
        key: 'Payment Terms',
        label: 'Payment Terms',
      },
      {
        key: 'Salutations',
        label: 'Salutations',
      },
      {
        key: 'States',
        label: 'States',
      },
      {
        key: 'Taxes',
        label: 'Taxes',
      },
      {
        key: 'Tax Preferences',
        label: 'Tax Preferences',
      },
      {
        key: 'Units',
        label: 'Units',
      },
      {
        key: 'Voucher Types',
        label: 'Voucher Types',
      },
      {
        key: 'Warehouses',
        label: 'Warehouses',
        img : '../../',
      },
      {
        key: 'deployHosting',
        label: 'Deploying & Hosting',
        subMenus: [
          {
            key: 'preparing',
            label: 'Preparing a Site for Deployment',
          },
          {
            key: 'awsAmplify',
            label: 'Deploying to AWS Amplify',
          },
          {
            key: 'awsS3',
            label: 'Deploying to S3 and CloudFront',
          },
        ],
      },
      {
        key: 'customConfig',
        label: 'Custom Configuration',
        subMenus: [
          {
            key: 'babeljs',
            label: 'Customizing Babel.js Config',
          },
          {
            key: 'babelPluginMacro',
            label: 'Using Babel Plugin Macros',
          },
          {
            key: 'customWebpack',
            label: 'Adding a Custom Webpack Config',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];

export default MaterialNestedMenuStyle;
