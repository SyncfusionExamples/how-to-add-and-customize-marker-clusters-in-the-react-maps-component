import { MapsComponent, LayersDirective, LayerDirective,
   Marker, Inject, MarkersDirective, MarkerDirective} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';

let markerData: object[] = [
  { Name:"Tokyo", Latitude:35.6894875, Longitude:139.6917064 },
  { Name:"New York", Latitude:40.7127753, Longitude:-74.0059728},
  { Name:"Sao Paulo", Latitude:-23.5505199, Longitude:-46.6333094 },
  { Name:"Seoul/Incheon", Latitude:37.566535, Longitude:126.9779692},
  { Name:"Mexico City", Latitude:19.2464696, Longitude:-99.1013498},
  { Name:"Osaka/Kobe/Kyoto", Latitude:35.0212466, Longitude:135.7555968 },
  { Name:"Manila", Latitude:14.5995124, Longitude:120.9842195 },
  { Name:"Jakarta", Latitude:-6.17511, Longitude:106.8650395 },
  { Name:"Lagos", Latitude:6.5243793, Longitude:3.3792057 },
  { Name:"Cairo", Latitude:30.0444196, Longitude:31.2357116 },
  { Name:"Los Angeles", Latitude:34.0522265, Longitude:-118.2436596},
  { Name:"Buenos Aires", Latitude:-34.6036844, Longitude:-58.3815591 },
  { Name:"Rio de Janeiro", Latitude:-22.9068467, Longitude:-43.1728965 },
  { Name:"Moscow", Latitude:55.755826, Longitude:37.6173 },
  { Name:"Shanghai", Latitude:31.2303904, Longitude:121.4737021},
  { Name:"Karachi", Latitude:25.0700428, Longitude:67.2847875},
  { Name:"Paris", Latitude:48.856614, Longitude:2.3522219 },
  { Name:"Istanbul", Latitude:41.0082376, Longitude:28.9783589 },
  { Name:"Nagoya", Latitude:35.1814464, Longitude:136.906398 },
  { Name:"Beijing", Latitude:39.9041999, Longitude:116.4073963 },
  { Name:"Chicago", Latitude:41.8781136, Longitude:-87.6297982},
  { Name:"London", Latitude:51.5073509, Longitude:-0.1277583 },
  
]
  let citiesInIndia : object[] = [
    { Name:"Mumbai", Latitude:19.0759837, Longitude:72.8776559 },
    { Name:"Delhi", Latitude:28.6139391, Longitude:77.2090212 },
    { Name:"Kolkata", Latitude:22.572646, Longitude:88.363895 }
  ]
function App() {
  return (
    <div className="App">
      <MapsComponent titleSettings={{text:'Top 25 populated cities in the world'}}
       >
        <Inject services={[Marker]}/>
        <LayersDirective>
          <LayerDirective shapeData={world_map}
          shapeSettings={ {
          fill: '#E5E5E5'
          }}
          markerClusterSettings={{
            allowClustering: true,
            shape: 'Circle',
            height: 20,
            width: 20,
            allowClusterExpand: true,
            connectorLineSettings: {
              color: 'orange',
              width: 3
            },
            labelStyle: {
              color: 'white'
            },
            fill: 'blue'
          }}
          >
          <MarkersDirective>
            <MarkerDirective visible={true} dataSource={markerData} >
            </MarkerDirective>
            <MarkerDirective visible={true} dataSource={citiesInIndia} 
            template='<div style="color:red;font-size:11px">${Name}</div>'
            //shape='Pentagon' height={20} width={20} 
            >
            </MarkerDirective>
          </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    </div>
  );
}

export default App;
