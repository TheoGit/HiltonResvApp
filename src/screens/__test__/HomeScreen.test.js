import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

describe("HomeScreen", () => {
    const navigation = { navigate: jest.fn() };
    const wrapper = shallow(<HomeScreen navigation={navigation} />);

    it('HomeScreen renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("CreateReservation", () => {
        const spy = jest.spyOn(wrapper.instance(), "onCreateReservationPress");
        wrapper.instance().onCreateReservationPress();
        expect(spy).toHaveBeenCalled();
    });

    it("ViewAllReservations", () => {
        const spy = jest.spyOn(wrapper.instance(), "onViewAllReservationsPress");
        wrapper.instance().onViewAllReservationsPress();
        expect(spy).toHaveBeenCalled();
    });

    it("GetById", () => {
        const spy = jest.spyOn(wrapper.instance(), "onGetByIdReservationsPress");
        wrapper.instance().onGetByIdReservationsPress();
        expect(spy).toHaveBeenCalled();
    });
});