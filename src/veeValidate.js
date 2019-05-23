import { Validator } from 'vee-validator'

const dictionary = {
    kr: {
        messages: {
            alpha: () => '다국어 프로젝트에 오신걸 환영합니다.'
        },
        attributes: {
            email: '이메일 주소'
        }
    },
    en: {
        messages: {
            alpha: () => 'Welcome to locale-project.'
        },
        attributes: {
            email: 'Email Address'
        }
    },
    vi: {
        messages: {
            alpha: () => 'Chào mừng đến với dự án địa phương.'
        },
        attributes: {
            email: 'Địa chỉ email'
        }
    }
}

//Override and merge the dictionaries
Validator.localize(dictionary);

const validator = new Validator({ first_name: 'alpha' });

validator.localize('kr'); //new this validator will generate messages in Vietnam

//////////////////////////////////////////////////////////////////////////////////

const dict = {
    custom: {
        email: {
            required: 'Your email is empty'
        },
        name: {
            required: () => 'Your name is empty'
        }
    }
}

Validator.localize('en', dict);
//or use the instance method
this.$validator.localize('en', dict);