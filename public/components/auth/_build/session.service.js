(function () {

  function sessionService($log, localStorage){

    this._authData = JSON.parse(localStorage.getItem('session.authData'));

    this.getAuthData = function(){
      return this._authData;
    };

    this.setAuthData = function(authData){
      this._authData = authData;
      localStorage.setItem('session.authData', JSON.stringify(authData));
      return this;
    };

    this.getGitHubAccessToken = function(){
      if(this._authData && this._authData.github && this._authData.github.accessToken){
        return this._authData.github.accessToken;
      }
      return '';
    };

    this.getAvatarUrl = function(){
      if(this._authData &&
        this._authData.github &&
        this._authData.github.cachedUserProfile &&
        this._authData.github.cachedUserProfile.avatar_url
      ){
        return this._authData.github.cachedUserProfile.avatar_url;
      }
      return '';
    };

    this.getFullName = function(){
      if(this._authData &&
        this._authData.github &&
        this._authData.github.displayName
      ){
        return this._authData.github.displayName;
      }
      return '';
    };

    this.getUsername = function(){
      if(this._authData &&
        this._authData.github &&
        this._authData.github.username
      ){
        return this._authData.github.username;
      }
      return '';
    };



    /**
     * Destroy session
     */
    this.destroy = function destroy(){
      this.setAuthData(null);
    };

  }

  // Inject dependencies
  sessionService.$inject = ['$log', 'localStorage'];

  // Export
  angular.module('app')
    .service('session', sessionService);

})();
