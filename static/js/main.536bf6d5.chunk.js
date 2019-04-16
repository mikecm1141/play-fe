(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(63)},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),c=a.n(s),i=a(14),l=a(20),o=a(8),u=a(9),h=a(11),d=a(10),f=a(12),m=a(21),p=(a(45),function(){return r.a.createElement("nav",{className:"bottom-nav"},r.a.createElement("div",null,r.a.createElement(l.b,{to:"/favorites",activeClassName:"active"},r.a.createElement("i",{className:"far fa-heart fa-5x fa-fw"}))),r.a.createElement("div",null,r.a.createElement(l.b,{exact:!0,to:"/",activeClassName:"active"},r.a.createElement("i",{className:"fas fa-search fa-5x fa-fw"}))),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/playlists",activeClassName:"active"},r.a.createElement("i",{className:"fas fa-music fa-5x fa-fw"}))))}),v=a(3),b="ARTISTS_FETCH",k="ARTISTS_ADD",y="TRACKS_FETCH",E="TRACKS_ADD",O="FAVORITE_POST",j="FAVORITES_FETCH",C="FAVORITES_ADD",T="FAVORITE_REMOVE",w="FAVORITE_REMOVE_LOCAL",g="PLAYLISTS_FETCH",N="PLAYLISTS_ADD",S="PLAYLIST_POST",x="PLAYLIST_POST_FAVORITE",_="PLAYLIST_DELETE_FAVORITE",A=function(e){return{type:"ARTISTS_FETCH_ERROR",error:e}},F=function(e){return{type:k,artists:e}},P=function(e){return{type:E,tracks:e}},R=function(e){return{type:"TRACKS_FETCH_ERROR",error:e}},I=(a(51),function(e){var t=e.handleTrackShow,a=e.artist;return r.a.createElement("div",{className:"listed-artist"},r.a.createElement("button",{className:"artist_name",onClick:function(){t(a.artist_id)}},a.artist_name))}),D=function(e){return{type:"FAVORITE_POST_ERROR",error:e}},M=function(e){return{type:"FAVORITES_FETCH_ERROR",error:e}},L=function(e){return{type:C,favorites:e}},V=function(e){return{type:w,favoriteId:e}},H=(a(52),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={iconClass:"favorite-button far fa-heart fa-1x fa-fw",favorite:!1},a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){this.state.favorite?this.setState({iconClass:"favorite-button far fa-heart fa-1x fa-fw",favorite:!1}):(this.props.onAddFavorite(this.props.track),this.setState({iconClass:"favorite-button fas fa-heart fa-1x fa-fw",favorite:!0}))}},{key:"render",value:function(){var e=this.props.track.track_name,t=this.state.iconClass;return r.a.createElement("div",{className:"listed-song"},r.a.createElement("div",null,r.a.createElement("p",{className:"name"},e)),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleClick},r.a.createElement("i",{className:t}))))}}]),t}(n.Component)),G=Object(i.b)(void 0,function(e){return{onAddFavorite:function(t){return e({type:O,songData:t})}}})(H),Y=(a(53),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={artistName:"",showArtists:!1,showTracks:!1},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a.handleTrackShow=a.handleTrackShow.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({artistName:e.target.value})}},{key:"handleClick",value:function(e){this.props.onFetchArtists(this.state.artistName),this.setState({showArtists:!0,showTracks:!1})}},{key:"handleTrackShow",value:function(e){this.setState({showArtists:!1,showTracks:!0}),this.props.onFetchTracks(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.artistsState,n=t.tracksState;return r.a.createElement("div",{className:"search-container"},r.a.createElement("div",{className:"search-header"},r.a.createElement("div",{className:"search-header-text"},r.a.createElement("h1",null,"search.")),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{type:"text",id:"artist-search-name",placeholder:"got an artist in mind?",onChange:this.handleChange}),r.a.createElement("button",{className:"search-button",id:"artist-search",type:"button",name:"search",onClick:this.handleClick},r.a.createElement("i",{className:"searchy fas fa-search fa-5x fa-fw"}))),r.a.createElement("div",{className:"songs-header"},r.a.createElement("h2",null,"browse available artists"))),r.a.createElement("div",{className:"fetch-data"},a.artists.length>0&&this.state.showArtists&&a.artists.map(function(t){return r.a.createElement(I,{key:t.artist.artist_id,artist:t.artist,handleTrackShow:e.handleTrackShow})}),n.tracks.length>0&&this.state.showTracks&&n.tracks.map(function(e){return r.a.createElement(G,{key:e.track.track_id,track:e.track})})))}}]),t}(n.Component)),J=Object(i.b)(function(e){return{artistsState:e.artistsState,tracksState:e.tracksState}},function(e){return{onFetchArtists:function(t){return e(function(e){return{type:b,artistName:e}}(t))},onFetchTracks:function(t){return e(function(e){return{type:y,artistId:e}}(t))}}})(Y),K=function(){return{type:g}},z=function(e){return{type:N,playlists:e}},q=(a(54),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={showTracks:!1,iconClass:"fas fa-chevron-circle-down",refreshList:!1},a.trackDetails=a.trackDetails.bind(Object(v.a)(Object(v.a)(a))),a.handleShowTracks=a.handleShowTracks.bind(Object(v.a)(Object(v.a)(a))),a.filterNullSongs=a.filterNullSongs.bind(Object(v.a)(Object(v.a)(a))),a.handleRemoveTrack=a.handleRemoveTrack.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleShowTracks",value:function(){this.setState({showTracks:!this.state.showTracks}),this.state.showTracks?this.setState({iconClass:"fas fa-chevron-circle-down"}):this.setState({iconClass:"fas fa-chevron-circle-up"})}},{key:"filterNullSongs",value:function(){return this.props.songs.filter(function(e){return null!==e.id})}},{key:"handleRemoveTrack",value:function(e){this.props.onDeletePlaylistTrack(this.props.id,e),this.props.refreshPlaylists(),this.setState({refreshList:!this.state.refreshList})}},{key:"trackDetails",value:function(){var e=this,t=this.filterNullSongs();return t.length>0?t.map(function(t){return r.a.createElement("div",{className:"tracks-container",key:t.id},r.a.createElement("div",{className:"tracks-info"},r.a.createElement("div",{className:"track-name"},r.a.createElement("strong",null,t.name)),r.a.createElement("div",{className:"track-artist"},t.artist_name)),r.a.createElement("div",{className:"track-action"},r.a.createElement("button",{onClick:function(){return e.handleRemoveTrack(t.id)}},r.a.createElement("i",{className:"fas fa-minus-circle remove-track"}))))}):r.a.createElement("div",{className:"tracks-container"},r.a.createElement("p",null,"Playlist empty, add some tracks."))}},{key:"render",value:function(){var e=this.props.playlist_name,t=this.filterNullSongs(),a=1===t.length?"track":"tracks";return r.a.createElement("div",{className:"playlist-container"},r.a.createElement("div",{className:"playlist-details-container",onClick:this.handleShowTracks},r.a.createElement("div",{className:"playlist-name"},r.a.createElement("i",{className:this.state.iconClass}),"\xa0",r.a.createElement("strong",null,e)),r.a.createElement("div",{className:"playlist-info"},r.a.createElement("p",null,t.length," ",a))),r.a.createElement("div",{className:"track-details"},this.state.showTracks?this.trackDetails():null))}}]),t}(n.Component)),B=Object(i.b)(void 0,function(e){return{onDeletePlaylistTrack:function(t,a){return e(function(e,t){return{type:_,playlistId:e,favoriteId:t}}(t,a))}}})(q),Q=(a(55),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={playlistName:""},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchPlaylists()}},{key:"handleChange",value:function(e){this.setState({playlistName:e.target.value})}},{key:"handleClick",value:function(){this.props.onPostPlaylist(this.state.playlistName)}},{key:"render",value:function(){var e=this,t=this.props.playlists.playlists;return r.a.createElement("div",{className:"playlists-container"},r.a.createElement("div",{className:"playlists-header"},r.a.createElement("div",{className:"playlists-header-text"},r.a.createElement("h1",null,"playlists."),r.a.createElement("h2",null,"jams for every occasion")),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{type:"text",id:"playlist-name",placeholder:"add a new playlist",onChange:this.handleChange}),r.a.createElement("button",{className:"search-button",id:"artist-search",type:"button",name:"search",onClick:this.handleClick},r.a.createElement("i",{className:"searchy fas fa-music fa-5x fa-fw"})))),r.a.createElement("div",{className:"fetch-data"},t.map(function(t){return r.a.createElement(B,Object.assign({},t,{key:t.id,refreshPlaylists:e.props.onFetchPlaylists}))})))}}]),t}(n.Component)),U=Object(i.b)(function(e){return{playlists:e.playlistsState}},function(e){return{onFetchPlaylists:function(){return e(K())},onPostPlaylist:function(t){return e(function(e){return{type:S,playlistName:e}}(t))}}})(Q),W=(a(56),a(57),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){this.props.onRemoveFavorite(this.props.id)}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.name,s=t.artist_name,c=t.genre,i=t.song_rating;return r.a.createElement("div",{className:"favorite-container"},r.a.createElement("div",null,r.a.createElement("p",{className:"favorite-title"},n),r.a.createElement("p",{className:"favorite-info"},r.a.createElement("strong",null,"Artist:")," ",s," |\xa0",r.a.createElement("strong",null,"Genre:")," ",c," |\xa0",r.a.createElement("strong",null,"Rating:")," ",i)),r.a.createElement("div",{className:"favorite-actions"},r.a.createElement("button",{onClick:this.handleClick},r.a.createElement("i",{title:"Remove Favorite",className:"favorite-button fas fa-heart fa-fw"})),r.a.createElement("button",{onClick:function(){e.props.openModal(a)}},r.a.createElement("i",{title:"Add to Playlist",className:"playlist-button fas fa-music fa-fw"}))))}}]),t}(n.Component)),X=Object(i.b)(void 0,function(e){return{onRemoveFavorite:function(t){return e(function(e){return{type:T,favoriteId:e}}(t))}}})(W),Z=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={playlist:"-1",error:null},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({playlist:e.target.value,error:null})}},{key:"handleClick",value:function(){var e=this.state.playlist,t=this.props,a=t.addToPlaylist,n=t.favorite,r=t.closeModal;"-1"!==e?(a(parseInt(e),n.id),r()):this.setState({error:"Select a valid playlist."})}},{key:"render",value:function(){var e=this.props,t=e.closeModal,a=e.playlists,n=e.favorite,s=this.state.error;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-box"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"modal-header-text"},r.a.createElement("h1",null,"add to playlist."),r.a.createElement("h2",null,"add ",r.a.createElement("em",null,n.name)," to selected playlist below"))),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"playlist-field"},r.a.createElement("select",{onChange:this.handleChange},r.a.createElement("option",{value:"-1"},"Select Playlist..."),a.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.playlist_name)})),r.a.createElement("button",{onClick:this.handleClick},r.a.createElement("i",{className:"fas fa-music fa-5x fa-fw"}))),s&&r.a.createElement("div",{className:"playlist-error"},s)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{onClick:t},"Close"))))}}]),t}(n.Component)),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={showModal:!1,selectedFavorite:null},a.handleOpenModal=a.handleOpenModal.bind(Object(v.a)(Object(v.a)(a))),a.handleCloseModal=a.handleCloseModal.bind(Object(v.a)(Object(v.a)(a))),a.handleAddToPlaylist=a.handleAddToPlaylist.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchFavorites(),this.props.onFetchPlaylists()}},{key:"handleOpenModal",value:function(e){var t=this.props.favorites.favorites;this.setState({showModal:!0,selectedFavorite:t.find(function(t){return t.id===e})})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"handleAddToPlaylist",value:function(e,t){this.props.onPostPlaylistFavorite(e,t)}},{key:"render",value:function(){var e=this,t=this.props.favorites.favorites,a=this.state,n=a.showModal,s=a.selectedFavorite,c=this.props.playlists.playlists;return r.a.createElement("div",{className:"favorites-container"},n&&c.length>0&&r.a.createElement(Z,{closeModal:this.handleCloseModal,playlists:c,favorite:s,addToPlaylist:this.handleAddToPlaylist}),r.a.createElement("div",{className:"favorites-header"},r.a.createElement("div",{className:"favorites-header-text"},r.a.createElement("h1",null,"favorites."),r.a.createElement("h2",null,"songs you can't live without"))),r.a.createElement("div",{className:"fetch-data"},t.map(function(t){return r.a.createElement(X,Object.assign({},t,{key:t.id,openModal:e.handleOpenModal}))})))}}]),t}(n.Component),ee=Object(i.b)(function(e){return{favorites:e.favoritesState,playlists:e.playlistsState}},function(e){return{onFetchFavorites:function(){return e({type:j})},onFetchPlaylists:function(){return e(K())},onPostPlaylistFavorite:function(t,a){return e(function(e,t){return{type:x,playlistId:e,favoriteId:t}}(t,a))}}})($),te=(a(59),a(60),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:J}),r.a.createElement(m.a,{path:"/playlists",component:U}),r.a.createElement(m.a,{path:"/favorites",component:ee})),r.a.createElement(p,null))}}]),t}(n.Component)),ae=a(19),ne=a(34),re=a(35),se={artists:[],error:null},ce=function(e,t){return{artists:t.artists,error:null}};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return ce(e,t);default:return e}},le={tracks:[],error:null},oe=function(e,t){return{tracks:t.tracks,error:null}};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return oe(e,t);default:return e}},he={favorites:[],error:null},de=function(e,t){return{favorites:t.favorites,error:null}},fe=function(e,t){return{favorites:e,error:null}};var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return de(e,t);case w:var a=Object.assign([],e);return a=a.favorites.filter(function(e){return e.id!==t.favoriteId}),fe(a,t);default:return e}},pe={playlists:[],error:null},ve=function(e,t){return{playlists:t.playlists,error:null}};var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return ve(e,t);default:return e}},ke=Object(ae.c)({artistsState:ie,tracksState:ue,favoritesState:me,playlistsState:be}),ye=a(7),Ee=a.n(ye),Oe=a(5),je=function(e){return fetch("https://cors-anywhere.herokuapp.com/".concat("https://api.musixmatch.com/ws/1.1","/artist.search?q_artist=").concat(e,"&format=json&apikey=6ad28f3bfd8438979401eba5775e6ae2&page_size=30"),{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})},Ce=Ee.a.mark(Te);function Te(e){var t,a;return Ee.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.artistName,n.prev=1,n.next=4,Object(Oe.b)(je,t);case 4:return a=n.sent,n.next=7,Object(Oe.c)(F(a.message.body.artist_list));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(Oe.c)(A(n.t0));case 13:case"end":return n.stop()}},Ce,null,[[1,9]])}var we=function(e){return fetch("https://cors-anywhere.herokuapp.com/".concat("https://api.musixmatch.com/ws/1.1","/track.search?f_artist_id=").concat(e,"&format=json&apikey=6ad28f3bfd8438979401eba5775e6ae2&page_size=30&s_track_rating=desc"),{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})},ge=Ee.a.mark(Ne);function Ne(e){var t,a;return Ee.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.artistId,n.prev=1,n.next=4,Object(Oe.b)(we,t);case 4:return a=n.sent,n.next=7,Object(Oe.c)(P(a.message.body.track_list));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(Oe.c)(R(n.t0));case 13:case"end":return n.stop()}},ge,null,[[1,9]])}var Se="https://sheltered-lake-54213.herokuapp.com",xe=function(e){var t={name:e.track_name,artist_name:e.artist_name,genre:"Genre",song_rating:e.track_rating};return fetch(Se+"/api/v1/songs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},_e=function(){return fetch(Se+"/api/v1/songs",{method:"GET"}).then(function(e){return e.json()})},Ae=function(e){return fetch(Se+"/api/v1/songs/"+e,{method:"DELETE",mode:"cors"})},Fe=Ee.a.mark(Ie),Pe=Ee.a.mark(De),Re=Ee.a.mark(Me);function Ie(e){var t;return Ee.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.songData,a.prev=1,a.next=4,Object(Oe.b)(xe,t);case 4:a.next=10;break;case 6:return a.prev=6,a.t0=a.catch(1),a.next=10,Object(Oe.c)(D(a.t0));case 10:case"end":return a.stop()}},Fe,null,[[1,6]])}function De(e){var t;return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(_e);case 3:return t=e.sent,e.next=6,Object(Oe.c)(L(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Oe.c)(M(e.t0));case 12:case"end":return e.stop()}},Pe,null,[[0,8]])}function Me(e){var t;return Ee.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.favoriteId,a.prev=1,a.next=4,Object(Oe.b)(Ae,t);case 4:return a.next=6,Object(Oe.c)(V(t));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0);case 11:case"end":return a.stop()}},Re,null,[[1,8]])}var Le="https://sheltered-lake-54213.herokuapp.com",Ve=function(){return fetch(Le+"/api/v1/playlists",{method:"GET"}).then(function(e){return e.json()})},He=function(e){var t={playlist_name:e};return fetch(Le+"/api/v1/playlists",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})},Ge=function(e,t){fetch("".concat(Le,"/api/v1/playlists/").concat(e,"/songs/").concat(t),{method:"POST"})},Ye=function(e,t){fetch("".concat(Le,"/api/v1/playlists/").concat(e,"/songs/").concat(t),{method:"DELETE"})},Je=Ee.a.mark(Be),Ke=Ee.a.mark(Qe),ze=Ee.a.mark(Ue),qe=Ee.a.mark(We);function Be(e){var t;return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(Ve);case 3:return t=e.sent,e.next=6,Object(Oe.c)(z(t));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},Je,null,[[0,8]])}function Qe(e){return Ee.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(He,e.playlistName);case 3:return t.next=5,Object(Oe.c)(K());case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},Ke,null,[[0,7]])}function Ue(e){return Ee.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(Ge,e.playlistId,e.favoriteId);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}},ze,null,[[0,5]])}function We(e){return Ee.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(Ye,e.playlistId,e.favoriteId);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}},qe,null,[[0,5]])}var Xe=Ee.a.mark(Ze);function Ze(){return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.a)([Object(Oe.d)(b,Te),Object(Oe.d)(y,Ne),Object(Oe.d)(O,Ie),Object(Oe.d)(j,De),Object(Oe.d)(T,Me),Object(Oe.d)(g,Be),Object(Oe.d)(S,Qe),Object(Oe.d)(x,Ue),Object(Oe.d)(_,We)]);case 2:case"end":return e.stop()}},Xe)}var $e=Ze,et=Object(ne.createLogger)(),tt=Object(re.a)(),at=Object(ae.e)(ke,void 0,Object(ae.a)(tt,et));tt.run($e);var nt=at,rt=document.getElementById("root");c.a.render(r.a.createElement(i.a,{store:nt},r.a.createElement(l.a,{basename:"/playfe"},r.a.createElement(te,null))),rt)}},[[36,1,2]]]);
//# sourceMappingURL=main.536bf6d5.chunk.js.map