import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TodoInterface, StateToogle } from '../../interfaces';
import '../../App.scss';
import './CircularProgress.scss';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  const mode = useSelector((state: StateToogle) => state.mode.toggle);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          width='30px'
          variant='body1'
          color={mode ? '#9896f1' : '#e6e6fa'}
          fontSize='18px'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const LinearWithValueLabel: React.FC = () => {
  const mode = useSelector((state: StateToogle) => state.mode.toggle);
  const tasks: TodoInterface[] = useSelector((state: any) => state.tasks.todos);
  const completeTasks: TodoInterface[] = tasks.filter(
    (item: TodoInterface) => item.completed !== false
  );
  const currentProgress: number = (completeTasks.length / tasks.length) * 100;
  const [progress, setProgress] = useState<number>(currentProgress);

  useEffect(() => {
    setProgress(currentProgress);
  }, [currentProgress]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel
        sx={{
          borderRadius: '6px',
          backgroundColor: `${mode ? 'azure' : 'rgb(186, 190, 245)'}`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#9896f1',
          },
        }}
        value={progress}
      />
    </Box>
  );
};

export default LinearWithValueLabel;
