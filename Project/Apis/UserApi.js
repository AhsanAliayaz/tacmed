import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://intechsol-developer.co/tacmed_academy/api',
    headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data', },
});
   const API = axios.create({
    baseURL:'https://intechsol-developer.co/tacmed_academy/api'
  });
const authorizedHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
};

const authorizedHeaders1 = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: '',
};


export const signup_api = (data) => {
    // console.log('data', data);
    const url = `/register`;
    const header = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    return axios.post(url, data, header)
      .then(({ data, status }) => {
        return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
        throw e;
      });
  };

  export const login_api = (data) => {
  const url = `/login`;
  // console.log('login_api data', data);
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

export const forgotEmail_api = (data) => {
  const url = `/forgot`;
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}


export const verifyEmail_api = (data) => {
  const url = `/confirm-code`;
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}


export const resetPassword_api = (data) => {
  const url = `/reset`;
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

export const all_Category = (payload) => {
  const url = `/all_category`;
  // console.log("data from ViewProfile_api..............",payload.auth);
  authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
  return axios.get(url, { headers: authorizedHeaders1})
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
};

export const all_medical = (payload) => {
    const url = `/new_medical`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };

  export const About_uss = (payload) => {
    const url = `/about_us`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };


  export const editProfile_api = async payload => {
    // console.log('edit user payload', payload);
    const requrest = `/edit`;
    try {
      const response = await API.post(requrest, payload.sData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${payload.auth}`,
        },
      });
      const { data, status } = response;
      return status === 200 || status === 201 ? data : null;
    } catch (err) {
      throw err;
    }
  };

  export const changePassword_api = (data,payload) => {
    const url = `/change-password`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    
    return axios.post(url, data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
}

export const organ_api = (data,payload) => {
  const url = `/all_organs`;
  authorizedHeaders1.Authorization = `Bearer ${payload}`;
  
  return axios.post(url, data, { headers: authorizedHeaders1 })
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}
export const subsearch_api = (payload, data) => {
  // console.log("Search data",auth,data)
  const url = `/subcatSearch`;
  authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
  return axios.post(url,data, { headers: authorizedHeaders1 })
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          console.log('In UserApi.js search_api catch block ....', e.response);
          throw e;
      });
}

export const Overview = (payload) => {
    const url = `/overview`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };

  export const Privacy = (payload) => {
    const url = `/privacy`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };

  export const Delete_User = (payload) => {
    const url = `/deleteUser`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };










