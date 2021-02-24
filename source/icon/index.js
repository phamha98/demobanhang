import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PixelRatio } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
export default class extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.number,
        color: PropTypes.string
    };
    static defaultProps = {
        size:PixelRatio.getFontScale() *35
    };
    renderIcon() {
        return <Icon {...this.props} />;
    }
    render() {
        return this.renderIcon();
    }
}