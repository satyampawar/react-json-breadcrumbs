# map-lat-lng


It's simple component that will be use for render Breadcrumb using json format

## Install

'npm install react-json-breadcrumbs'

## Usage basic


const jsonData = {
  "data": [{
         "id": 1,
         "path": "/home",
         "name": "Home",
         "is_parent": true
      },{
         "id": 2,
         "path": "/home2",
         "name": "Home2",
         "parent_id": 1
      },{
        "id": 3,
         "path": "/home3",
         "name": "Home3",
         "parent_id": 2
      }

      
      ]
};
import BreadcrumbRoute from 'react-json-breadcrumbs'


const jsonData = {
  "data": [{
         "id": 1,
         "path": "/home",
         "name": "Home",
         "is_parent": true
      },{
         "id": 2,
         "path": "/home2",
         "name": "Home2",
         "parent_id": 1
      },{
        "id": 3,
         "path": "/home3",
         "name": "Home3",
         "parent_id": 2
      }

      
      ]
};

 <BredcrumbRoute path="/home" 
  exact 
  jsonData={jsonData}
  component={(Home)}
 />

 <BredcrumbRoute path="/home2" 
	 exact 
	 jsonData={jsonData} 
	 component={(Home2)}
 />

''''
## Props

#### `jsonData` (required)
set object of jsondata

#### set root path icon 
rootPathImg



### separator
separator





## License
[MIT]