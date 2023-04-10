import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import './style.css'

export const FilterAge = () => {
    return (
        <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
            <RangeSliderTrack>
                <RangeSliderFilledTrack bg='#14253d' />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
    )
}
