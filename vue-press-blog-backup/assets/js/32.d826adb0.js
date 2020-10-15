(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{237:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deploy-elk-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-elk-with-docker"}},[t._v("#")]),t._v(" Deploy ELK With Docker")]),t._v(" "),a("h2",{attrs:{id:"file-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-tree"}},[t._v("#")]),t._v(" File Tree")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─ elk\n├── elasticsearch\n│   ├── config\n│   │   ├── es01\n│   │   |   └── elasticsearch.yml\n│   │   └── es02\n│   │       └── elasticsearch.yml\n│   ├── data\n│   │   ├── es01\n│   │   └── es02\n│   └── logs\n│       ├── es01\n│       └── es02\n├── filebeat\n│   ├── data\n│   │   ├── meta.json\n│   │   └── registry\n│   ├── filebeat.docker.yml\n│   ├── logs\n│   └── logstash-tutorial.log\n├── kibana\n│   └── config\n│       └── kibana.yml\n├── logstash\n│   ├── config\n│   │   └── logstash.yml\n│   └── pipeline\n│       └── logstash.conf\n└── docker-compose.yml\n\n")])])]),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p",[t._v("Deploy with docker-compose")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("es01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.elastic.co/elasticsearch/elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7.4.2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" es01\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ulimits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("soft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nofile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("soft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./elasticsearch/data/es01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./elasticsearch/config/es01/elasticsearch.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/config/elasticsearch.yml\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./elasticsearch/logs/es01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/user/share/elasticsearch/logs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9300"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" elastic\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("es02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.elastic.co/elasticsearch/elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7.4.2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" es02\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ulimits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("soft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nofile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("soft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536        ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./elasticsearch/data/es02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./elasticsearch/config/es02/elasticsearch.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/config/elasticsearch.yml\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./elasticsearch/logs/es02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/user/share/elasticsearch/logs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9201"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9301"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" elastic\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# es03:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   image: docker.elastic.co/elasticsearch/elasticsearch:7.4.2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   container_name: es03")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   environment:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - node.name=es03")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - cluster.name=es-docker-cluster")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - discovery.seed_hosts=es01,es02")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - cluster.initial_master_nodes=es01,es02,es03")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - bootstrap.memory_lock=true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#     - "ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   ulimits:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     memlock:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       soft: -1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       hard: -1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   volumes:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - data03:/usr/share/elasticsearch/data")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   networks:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     - elastic")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kibana")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.elastic.co/kibana/kibana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7.4.2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kibana\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./kibana/config/kibana.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/kibana/config/kibana.yml      \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 5601"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5601")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" elastic\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" es01\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" es02\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logstash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.elastic.co/logstash/logstash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7.4.2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logstash\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./logstash/config/logstash.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/logstash/config/logstash.yml\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./logstash/pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/logstash/pipeline\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 5044"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5044")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9600"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9600")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("LS_JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Xmx256m -Xms256m"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" elastic\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" es01\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" es02\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("elastic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n\n\n")])])]),a("h3",{attrs:{id:"attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attention"}},[t._v("#")]),t._v(" Attention")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Trap")]),t._v(" "),a("ul",[a("li",[t._v("change data's and log's permission")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown -R user:root data \nchown -R user:root log\n")])])]),a("ul",[a("li",[t._v("add config")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vm.max_map_count\nvi /etc/sysctl.conf\nvm.max_map_count = 655360\nsysctl -p\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);