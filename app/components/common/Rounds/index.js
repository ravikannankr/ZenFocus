import { connect } from 'react-redux';

import Rounds from 'common/Rounds/rounds';

const mapStateToProps = state => ({
  currentPhase: state.rounds.currentPhase,
  currentRound: state.rounds.currentRound,
  totalRounds: state.rounds.totalRounds
});

export default connect(mapStateToProps)(Rounds);
